module.exports = async(ctx, next) => {
  ctx.setGlobal('appinfo', {
    name: 'happy-template'
  });
  await next();
};
