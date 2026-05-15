try {
  // risky code

  const x=3/0;

} catch (err) {
  // error handling
  console.log("exception");
} finally {
  // always runs
  console.log('inside finally')
}