const timestampGenerator = (req, res) => {
  let date = new Date();
  const dateString = req.params.date_string;

  if (dateString) {
    if (dateString.match(/\-/)) {
      date = new Date(dateString);
    } else {
      date = new Date(Number(dateString));
    }
  }

  if (isNaN(date.getTime())) return res.json({ error: "Invalid Date" });
  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
};

module.exports = timestampGenerator;
