// Temporary api/database
const content = {
  plastic: {
    impact:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    what_happens:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    haringey: {
      recyclable_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
    islington: {
      recyclable_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
    redbridge: {
      what_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
  },
  metal: {
    impact:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    what_happens:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    Haringey: {
      recyclable_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
    Islington: {
      recyclable_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
    Redbridge: {
      what_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
  },
  glass: {
    impact:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    what_happens:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    haringey: {
      recyclable_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
    islington: {
      recyclable_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
    redbridge: {
      what_material:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      how_to_recycle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
    },
  },
};

export default content;
