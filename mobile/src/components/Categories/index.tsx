import { useState } from 'react';
import { FlatList } from 'react-native';

import { Category } from '../../types/Category';

import { CategoryContainer, Icon } from './styles';
import { Text } from '../Text';

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState();

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    // onSelectedCategory(category)
    // setSelectedCategory(category);
  }

  return (
    <>
      <FlatList
        horizontal
        data={categories}
        contentContainerStyle={{ paddingRight: 24 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id;

          return (
            <CategoryContainer
              onPress={() => handleSelectCategory(category._id)}
            >
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">
                {category.name}
              </Text>
            </CategoryContainer>
          );
        }}
      />
    </>
  );
}
