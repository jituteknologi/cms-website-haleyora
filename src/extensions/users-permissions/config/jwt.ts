module.exports = {
  default: ({ env }) => ({
    jwtSecret: env("JWT_SECRET"),
    jwt: {
      expiresIn: "60m",
    },
  }),
};
