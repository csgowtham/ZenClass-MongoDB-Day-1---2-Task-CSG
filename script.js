const users = [{
    "_id": {
      "$oid": "66b0e4114ee875253857ce3e"
    },
    "user_id": 1,
    "name": "Gowtham",
    "email": "gowtham@example.com",
    "mentee_count": 10
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce3f"
    },
    "user_id": 2,
    "name": "Vimal",
    "email": "vimal@example.com",
    "mentee_count": 15
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce40"
    },
    "user_id": 3,
    "name": "Karthik",
    "email": "karthik@example.com",
    "mentee_count": 12
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce41"
    },
    "user_id": 4,
    "name": "Vishnu",
    "email": "vishnu@example.com",
    "mentee_count": 8
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce42"
    },
    "user_id": 5,
    "name": "Sanjay",
    "email": "sanjay@example.com",
    "mentee_count": 20
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce43"
    },
    "user_id": 6,
    "name": "Naren",
    "email": "naren@example.com",
    "mentee_count": 25
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce44"
    },
    "user_id": 7,
    "name": "Sathish",
    "email": "sathish@example.com",
    "mentee_count": 5
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce45"
    },
    "user_id": 8,
    "name": "Hariharan",
    "email": "hariharan@example.com",
    "mentee_count": 18
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce46"
    },
    "user_id": 9,
    "name": "Akash",
    "email": "akash@example.com",
    "mentee_count": 14
  },
  {
    "_id": {
      "$oid": "66b0e4114ee875253857ce47"
    },
    "user_id": 10,
    "name": "Abhinay",
    "email": "abhinay@example.com",
    "mentee_count": 22
  }];
function getRandomStatus() {
  return Math.random() > 0.5 ? "present" : "absent";
}
const dates = [
  new Date("2024-10-15"),
  new Date("2024-10-16"),
  new Date("2024-10-17"),
  new Date("2024-10-18"),
  new Date("2024-10-19"),
  new Date("2024-10-20"),
  new Date("2024-10-21"),
  new Date("2024-10-22"),
  new Date("2024-10-23"),
  new Date("2024-10-24")
];
const attendanceData = [];
users.forEach(user => {
  dates.forEach(date => {
    attendanceData.push({
      user_id: user.user_id,
      date: date,
      status: getRandomStatus()
    });
  });
});

console.log(attendanceData)