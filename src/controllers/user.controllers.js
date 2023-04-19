const { User, Role, Education, Experience } = require("../db.js");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// const tokenSecret = process.env.CRYPTED_TOKEN;

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
      attributes: ["id","name","email","phone","isPremium","roleId","experienceId","educationId"],
    });
    if (user === null) throw new Error("User not found");
    res.status(201).json({ user: user, msg: "User found" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  try {
    const new_user = await User.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    if (!new_user) throw new Error("No se pudo crear el usuario");
    const role_user = await Role.findOne({
      where: {
        name: role.name,
      },
    });
    if (role_user !== null) await new_user.setRole(role_user);
    else await new_user.createRole(role);
    res.status(201).json({ user: new_user, msg: "User created" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const verifyUser = async (req, res) => {
  const { email, password } = req.body;

  // creación de código único encriptado
  const tokenBytes = crypto.randomBytes(32);
  const tokenSecurity = tokenBytes.toString("hex");
  const hashedToken = crypto
    .createHmac("sha256", tokenSecret)
    .update(tokenSecurity)
    .digest("hex");

  try {
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
      attributes: ["id","name","email","phone","isPremium","roleId","experienceId","educationId"],
    });
    if (!user) throw new Error("User not found");

    // se envía token de autenticación creado, con expiración de 15 min, y datos de creación
    const tokenPayload = { userId: user.id, createdAt: Date.now() };
    const tokenOptions = { expiresIn: "1h" };
    const token = jwt.sign(tokenPayload, tokenOptions, hashedToken);

    res.status(201).json({ user: user, token: token, msg: "User found" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

async function verifyToken(req, res, next) {
  try {
    const bearerHeader = req.headers["Authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      jwt.verify(bearerToken, tokenSecret, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          req.authData = authData;
          next();
        }
      });
    }
  } catch {
    res.sendStatus(401)
  }
}

async function GetAll(req, res) {
  try {
    const DBusers = await User.findAll({
      attributes: ["id","name","email","phone","isPremium","roleId","experienceId","educationId"],
    });
    res.status(200).json(DBusers);
  } catch (error) {
    res.status(404).json("Users not found!");
  }
}

const modifyUser=async (req,res)=>{
    const {id, educacion, experiencia}=req.body;
    try {
        const user = await User.findOne({
            where: {
                id : id
            },
            attributes:["id","name","email","phone","isPremium","roleId","experienceId","educationId"]
        })
        if(user === null) throw new Error('User not found');
        const educacion_user = await Education.findOne({
            where: {
                name : educacion.name
            }
        })
        if(educacion_user !== null) await user.setEducation(educacion);
        else await user.createEducation(educacion);

        const experiencia_user = await Experience.findOne({
            where: {
                name : experiencia.name
            }
        })
        if(experiencia_user !== null) await user.setExperience(experiencia);
        else await user.createExperience(experiencia);

        res.status(201).json({user:user, msg:'User updated'});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
  createUser,
  verifyUser,
  verifyToken,
  getUserById,
  GetAll,
  modifyUser,
};
