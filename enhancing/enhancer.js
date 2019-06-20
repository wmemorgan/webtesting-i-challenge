module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.enhancement < 20 ?
  item.enhancement++ :
  item.enhancement = 20
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -=5
  } else if (item.enhancement >= 15) {
    item.durability -=10
    if (item.enhancement > 16 ) {
      item.enhancement--
    }
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100
  return { ...item };
}

function get(item) {
  return { ...item };
}
