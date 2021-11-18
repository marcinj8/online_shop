import ListItem from "../components/listItem";

const createCategories = (itemsList, setCategories) => {
  const categories = ["all"];
  for (let shopItem of itemsList) {
    const index = categories.findIndex(
      (category) => category === shopItem.category
    );
    if (index < 0) {
      categories.push(shopItem.category);
    }
  }

  setCategories(categories);
};

export const createList = (
  fetchedList,
  selectedCategory,
  setItemsList,
  setCategories
) => {
  createCategories(fetchedList, setCategories);
  const list = fetchedList.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        category={item.category}
        description={item.description}
        image={item.image}
        selectedCategory={selectedCategory}
      />
    );
  });
  setItemsList(list);
};
