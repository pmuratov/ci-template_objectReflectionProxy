import { sortByProps } from "../app";
import { spAttack } from "../app";

test("sort by - name level", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(sortByProps(obj, ["name", "level"])).toEqual(result);
});

test("sort by - level name defence", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: "level", value: 2 },
    { key: "name", value: "мечник" },
    { key: "defence", value: 40 },
    { key: "attack", value: 80 },
    { key: "health", value: 10 },
  ];
  expect(sortByProps(obj, ["level", "name", "defence"])).toEqual(result);
});

test("sort by - default (alphabet)", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "мечник" },
  ];
  expect(sortByProps(obj)).toEqual(result);
});

test("speciall attack testing", () => {
  const char = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
      },
    ],
  };

  const expected = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];

  expect(expected).toEqual(spAttack(char));
});
