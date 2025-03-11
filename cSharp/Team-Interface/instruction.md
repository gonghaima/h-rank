Implement inheritance as described below.

Create a class Team that has the following:

1. A member variable teamName [string]
2. A member variable noOfPlayers [integer]

3. A constructor function:

1. It takes 2 parameters and assigns them to teamName and noOfPlayers respectively.
4. A member function AddPlayer(count).

1. It takes an integer count as a parameter and increases noOfPlayers by count.
5. A member function RemovePlayer(count).

1. It takes an integer count as a parameter and tries to decrease noOfPlayers by count.

2. If decreasing makes noOfPlayers negative, then this function simply returns false.

3. Else, decrease noOfPlayers by count and return true.

Create a class Subteam that inherits from the above class Team. It has the following:

1. A constructor function:

1. It takes 2 parameters, teamName and noOfPlayers, and calls the base class constructor with these parameters.

2. A member function ChangeTeamName(name).

1. It takes a string name as a parameter and changes teamName to name.

Note: Declare all the members as public so that they are accessible by the stubbed code.

Your implementation of the function will be tested by a stubbed code on several input files. Each input file contains parameters for the function calls.
The functions will be called with those parameters, and the result of their executions will be printed to the standard output by the stubbed code.

 Input Format For Custom Testing

The first line contains the initial teamName.
The second line contains the initial noOfPlayers.
The third line contains the count to be passed to AddPlayer(count).
The fourth line contains the count to be passed to RemovePlayer(count).
The fifth line contains the new teamName to be passed to ChangeTeamName(name).

 Output Format For Custom Testing

The first line prints "Team teamName created".
The second line prints "Current number of players in team teamName is noOfPlayers".
The third line prints "New number of players in team teamName is noOfPlayers".
The fourth line prints "Current number of players in team teamName is noOfPlayers".
The fifth line prints "New number of players in team teamName is noOfPlayers" or "Number of players in team teamName remains same" depending on the return value of RemovePlayer(count).
The sixth line prints "Team name of team initialName changed to teamName".

 Sample Input 0

OldTeam
2
3
4
NewTeam

 Sample Output 0

Team OldTeam created
Current number of players in team OldTeam is 2
New number of players in team OldTeam is 5
Current number of players in team OldTeam is 5
Number of players in team OldTeam remains same
Team name of team OldTeam changed to NewTeam

 Sample Input 1

Champions
2
1
2
IPL

 Sample Output 1

Team Champions created
Current number of players in team Champions is 2
New number of players in team Champions is 3
Current number of players in team Champions is 3
New number of players in team Champions is 1
Team name of team Champions changed to IPL

 Stubbed Code

```csharp
using System;

class Solution {
    static void Main(string[] args) {
        string initialName = Console.ReadLine();
        string str = Console.ReadLine();
        int count = Convert.ToInt32(str);
        Subteam teamObj = new Subteam(initialName, count);
        Console.WriteLine("Team " + teamObj.teamName + " created");

        str = Console.ReadLine();
        count = Convert.ToInt32(str);
        Console.WriteLine("Current number of players in team " + teamObj.teamName + " is " + teamObj.noOfPlayers);

        teamObj.AddPlayer(count);
        Console.WriteLine("New number of players in team " + teamObj.teamName + " is " + teamObj.noOfPlayers);

        str = Console.ReadLine();
        count = Convert.ToInt32(str);
        Console.WriteLine("Current number of players in team " + teamObj.teamName + " is " + teamObj.noOfPlayers);

        bool res = teamObj.RemovePlayer(count);
        if (res) {
            Console.WriteLine("New number of players in team " + teamObj.teamName + " is " + teamObj.noOfPlayers);
        } else {
            Console.WriteLine("Number of players in team " + teamObj.teamName + " remains same");
        }

        str = Console.ReadLine();
        teamObj.ChangeTeamName(str);
        Console.WriteLine("Team name of team " + initialName + " changed to " + teamObj.teamName);
    }
}