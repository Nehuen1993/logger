import {faker} from '@faker-js/faker'


export const generateMock = () => {
    return {
        name: faker.commerce.productName() || 'Default Product Name',
        categoria: faker.commerce.department() || 'Default Department',
        cantidad: faker.string.numeric(1, { bannedDigits: ["0"] }) || '1',
        precio: faker.string.numeric(1, { bannedDigits: ["0"] }) || '0',
    };
};


export const generateMockList = (count) => {
    const mockList = [];

    for (let i = 0; i < count; i++) {
        mockList.push(generateMock());
    }

    return mockList;
};

export default generateMock