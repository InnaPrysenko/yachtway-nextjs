import React, {Fragment} from 'react';
import Button, {ImageCategory} from '@/components/button';

type CategorySelectorProps = {
    categories: ImageCategory[];
    selectedType: ImageCategory;
    onSelectCategory: ( category: ImageCategory ) => void;
};


const CategorySelector: React.FC<CategorySelectorProps> = ( { categories, selectedType, onSelectCategory, } ) => (
    <div className="flex space-x-4 py-4">
        {categories.map( ( category, index ) => (
            <Fragment key={category}>
                <Button
                    label={category}
                    isActive={selectedType === category}
                    onClick={() => onSelectCategory(category)}
                />
                {index !== categories.length - 1 && <span className="text-gray-400">/</span>}
            </Fragment>
        ) )}
    </div>
);
export default CategorySelector