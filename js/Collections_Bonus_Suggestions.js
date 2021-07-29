// ================================= COLLECTIONS BONUSES
//
// DRILLS
//
//   Redo JS arrays exercises using Java ArrayList
//
//   Create a how-many-days-in-the-month-quiz? guessing game...
//
//     Create a hashmap containing the answers (month strings are the keys and total days as the int values)
//     Randomly quiz the user on how many days are in a given month and tell them if it is correct
//     Prompt the user if they wish to continue every 3 questions
//     Use the total days for each month for 2018
//
//
//
// BONUS
//
// Continue Working on The Grading Application...
//
// (from the collections exercise)
//
// - Modify your CLI to provide an option to view the overall class average
//
// - Modify your CLI to provide an option to print a csv report of all the
//   students
//
//     Example Output

//         name,github_username,average
//         Zach,zgulde,81.2
//         Ryan,ryanorsinger,88.3
//         Fernando,fmendozaro,90.4
//         ...
//
// - Add an attendance property to your Student objects. It should be a
//   HashMap<String, String>. The keys should be strings representing the date,
//   in the format "2017-10-02", and the values should be Strings that are one
//   of "A" (Absent) or "P" (Present).
//
//     - Add a method named `recordAttendance(String date, String value)` that adds
//       records to the attendance HashMap. This method should make sure `value` is
//       an an acceptable string (one of "A" or "P").
//     - Create an instance method on your Student class to calculate a
//       student's attendance percentage -- (Total Days - Absences) / Total Days
//     - Add the attendance information to the output of your command line
//       interface, this should require only a small change
//     - Create an instance method on Student that finds the specific days a
//       student was absent. This method should return a List of Strings, where
//       each string is the date of the absence
//
//
// BONUS
//
// Create an employee timesheet tracking system.
//
// Reproduce the functionality found at the following site: https://www.redcort.com/Free-Timecard-Calculator/
//
// Recommended implementation...
//
//   Create a TimeRecord class that has the following properties
//     String startingTime
//     String endingTime
//     String breakDeduction
//
//   And methods...
//     double calculateHours()
//
//   In the TimeSheetApp class, include a main method with code to prompt the user to the starting time, ending time, break deduction for each day of the week.
//
//   Store the TimeRecord objects in a HashMap<String, TimeRecord> (where the keys are the days of the week)
//
//   As an extra bonus, allow the user to edit a given day's properties in the HashMap.
//
//
// BONUS
//
// Create an arraylist of people objects and sort the list by each person object's name (research the Comparable interface to achieve this)
//
// BONUS
//
// Prompt the user to enter a list of ten student first names. Return a collection of only unique names entered. Research HashSet to accomplish this.
//
//
// BONUS
//
// Rock, Paper, Scissors... https://www.reddit.com/r/beginnerprojects/comments/2ah82f/rock_paper_scissors/
//
// Be sure to store a list of player wins and losses
//
//
// BONUS
//
// Menu Calculator... https://www.reddit.com/r/beginnerprojects/comments/1bytu5/projectmenu_calculator/
