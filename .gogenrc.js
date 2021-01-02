module.exports = async ({src, dest, pipeline, template}, {name}) => {
  await pipeline(
    // copy files
    src('.template/**'),
    template({name}),
    dest()
  )
}
