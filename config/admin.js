module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3f703bb5df43fec923a986180e0d552'),
  },
});
