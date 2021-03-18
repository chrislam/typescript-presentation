// Here's some values
enum Status {
  Gold = "gold",
  Silver = "silver",
  Bronze = "bronze",
}

// What if we want them in a specific order?
const orderedStatuses = [Status.Gold, Status.Silver, Status.Bronze];

// We need to put them in an array
for (const status of orderedStatuses) {
  console.log(status);
}