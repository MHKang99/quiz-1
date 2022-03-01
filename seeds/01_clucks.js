/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clucks')
  .del()
  .then(()=> {
    return knex('clucks')
    .insert([
      {
        id: 1,
        username: 'Bob',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo, illum facilis doloribus consequatur natus. Consequatur recusandae vel velit corporis rerum. Magni neque dolore beatae error nostrum vel laborum voluptates.",
        img_url: "https://images.unsplash.com/photo-1646122850444-10ae77a949d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 2,
        username: 'Tim',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo, illum facilis doloribus consequatur natus. Consequatur recusandae vel velit corporis rerum. Magni neque dolore beatae error nostrum vel laborum voluptates.",
        img_url: "https://images.unsplash.com/photo-1646122850444-10ae77a949d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 3,
        username: 'Ann',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo, illum facilis doloribus consequatur natus. Consequatur recusandae vel velit corporis rerum. Magni neque dolore beatae error nostrum vel laborum voluptates.",
        img_url: "https://images.unsplash.com/photo-1646122850444-10ae77a949d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 4,
        username: 'Jizanthupuss',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo, illum facilis doloribus consequatur natus. Consequatur recusandae vel velit corporis rerum. Magni neque dolore beatae error nostrum vel laborum voluptates.",
        img_url: "https://images.unsplash.com/photo-1646122850444-10ae77a949d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
    ])
  })
};
