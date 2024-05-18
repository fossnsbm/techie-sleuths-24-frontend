import { Rule } from "@/types/rule";

const Rules: Rule[] = [
  {
    id: 1,
    title: "Rule 1",
    description: [
      "Each team must have 2 to 4 members (2 min, 4 max)",
      "Team Leaders should register using their NSBM mail [all the other members can log into the system using team leader’s mail and the password given by you",
    ],
  },
  {
    id: 2,
    title: "Rule 2",
    description: [
      "First 20 teams who will get registered will be selected for the competition",
      "After registration closed the selected teams will receive an email",
    ],
  },
  {
    id: 3,
    title: "Rule 3",
    description: [
      "Teams must be there by 9.00 am on the 22nd may 2024",
      "Each team will be guided by a mentor from the FOSS Community",
    ],
  },
  {
    id: 4,
    title: "Rule 4",
    description: [
      "The 3 teams who will fill the most number of puzzle terms will be the winners",
      "Winning teams will receive prizes along with certificates",
      "For each team there should be at least one NFC-enabled mobile device",
    ],
  },
];

export default Rules;
