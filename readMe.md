###Zen Class Program MongoDB Database
This MongoDB database is designed for managing various aspects of a Zen class program, including users, mentors, tasks, topics, attendance, CodeKata statistics, and company drives.

##Collections
1. Users
Stores information about the users participating in the program.

Fields:

user_id: Unique identifier for each user.
name: Name of the user.
email: Email address of the user.
mentee_count: Number of mentees assigned to the user.
2. Mentors
Contains details about the mentors involved in the program.

Fields:

mentor_id: Unique identifier for each mentor.
name: Name of the mentor.
mentee_count: Number of mentees assigned to the mentor.
3. CodeKata
Keeps track of the number of problems solved by each user in the CodeKata section.

Fields:

user_id: References the user_id from the Users collection.
problems_solved: Number of problems solved by the user.
4. Attendance
Records attendance of users on specific dates.

Fields:

user_id: References the user_id from the Users collection.
date: Date of attendance.
status: Attendance status (present or absent).
5. Topics
Stores information about the topics covered in the program.

Fields:

topic_id: Unique identifier for each topic.
topic_name: Name of the topic.
date: Date when the topic was taught.
6. Tasks
Manages tasks assigned to users on specific dates.

Fields:

task_id: Unique identifier for each task.
task_name: Name of the task.
date: Date when the task was assigned.
notSubmitted: Array of user_id who have not submitted the task.
7. Company Drives
Tracks information about placement drives conducted by various companies.

Fields:

drive_id: Unique identifier for each company drive.
company_name: Name of the company conducting the drive.
date: Date when the drive was conducted.
students_appeared: Array of user_id who appeared for the drive.