import { IClue } from "@/types/puzzle";

interface Clue extends IClue {
  characterCount: number;
  cellRange: string[];
}

const clueCellCount: Clue[] = [
  {
    clueNumber: 1,
    clueDirection: "d",
    characterCount: 4,
    cellRange: ["b13", "b14", "b15", "b16"],
  },
  {
    clueNumber: 2,
    clueDirection: "d",
    characterCount: 10,
    cellRange: [
      "b18",
      "b19",
      "b20",
      "b21",
      "b96",
      "b97",
      "b98",
      "b99",
      "b100",
      "b101",
    ],
  },
  {
    clueNumber: 3,
    clueDirection: "d",
    characterCount: 5,
    cellRange: ["b1", "b2", "b3", "b4", "b5"],
  },
  {
    clueNumber: 4,
    clueDirection: "d",
    characterCount: 12,
    cellRange: [
      "b9",
      "b10",
      "b23",
      "b24",
      "b27",
      "b28",
      "b29",
      "b30",
      "b31",
      "b32",
      "b33",
      "b34",
    ],
  },
  {
    clueNumber: 5,
    clueDirection: "a",
    characterCount: 11,
    cellRange: [
      "b2",
      "b6",
      "b7",
      "b8",
      "b10",
      "b11",
      "b12",
      "b16",
      "b17",
      "b21",
      "b22",
    ],
  },
  {
    clueNumber: 6,
    clueDirection: "a",
    characterCount: 3,
    cellRange: ["b24", "b25", "b26"],
  },
  {
    clueNumber: 7,
    clueDirection: "a",
    characterCount: 5,
    cellRange: ["b109", "b110", "b111", "b112", "b113"],
  },
  {
    clueNumber: 8,
    clueDirection: "d",
    characterCount: 10,
    cellRange: [
      "b113",
      "b114",
      "b115",
      "b116",
      "b107",
      "b117",
      "b118",
      "b95",
      "b119",
      "b120",
    ],
  },
  {
    clueNumber: 9,
    clueDirection: "d",
    characterCount: 5,
    cellRange: ["b125", "b126", "b127", "b128", "b129"],
  },
  {
    clueNumber: 10,
    clueDirection: "a",
    characterCount: 6,
    cellRange: ["b115", "b121", "b122", "b123", "b124", "b127"],
  },
  {
    clueNumber: 11,
    clueDirection: "a",
    characterCount: 7,
    cellRange: ["b102", "b103", "b104", "b105", "b106", "b107", "b108"],
  },
  {
    clueNumber: 12,
    clueDirection: "a",
    characterCount: 7,
    cellRange: ["b35", "b36", "b37", "b38", "b39", "b32", "b40"],
  },
  {
    clueNumber: 13,
    clueDirection: "d",
    characterCount: 8,
    cellRange: ["b79", "b80", "b81", "b82", "b83", "b84", "b85", "b86"],
  },
  {
    clueNumber: 14,
    clueDirection: "d",
    characterCount: 6,
    cellRange: ["b88", "b89", "b90", "b91", "b92", "b93"],
  },
  {
    clueNumber: 15,
    clueDirection: "d",
    characterCount: 5,
    cellRange: ["b41", "b42", "b43", "b44", "b45"],
  },
  {
    clueNumber: 15,
    clueDirection: "a",
    characterCount: 14,
    cellRange: [
      "b41",
      "b46",
      "b34",
      "b47",
      "b48",
      "b49",
      "b50",
      "b77",
      "b78",
      "b80",
      "b87",
      "b89",
      "b94",
      "b95",
    ],
  },
  {
    clueNumber: 16,
    clueDirection: "d",
    characterCount: 10,
    cellRange: [
      "b50",
      "b51",
      "b52",
      "b53",
      "b54",
      "b55",
      "b56",
      "b57",
      "b58",
      "b59",
    ],
  },
  {
    clueNumber: 17,
    clueDirection: "d",
    characterCount: 7,
    cellRange: ["b61", "b62", "b63", "b64", "b65", "b66", "b67"],
  },
  {
    clueNumber: 18,
    clueDirection: "d",
    characterCount: 5,
    cellRange: ["b70", "b71", "b72", "b73", "b74"],
  },
  {
    clueNumber: 19,
    clueDirection: "a",
    characterCount: 7,
    cellRange: ["b58", "b60", "b62", "b68", "b69", "b71", "b75", "b76"],
  },
];

export function getCellRange(
  clueNumber: number,
  clueDirection: "d" | "a",
): string[] | undefined {
  const clue = clueCellCount.find(
    (c) => c.clueNumber === clueNumber && c.clueDirection === clueDirection,
  );
  return clue?.cellRange;
}

export function getCellCount(
  clueNumber: number,
  clueDirection: "d" | "a",
): number {
  const clue = clueCellCount.find(
    (c) => c.clueNumber === clueNumber && c.clueDirection === clueDirection,
  );
  return clue?.characterCount || 0;
}
