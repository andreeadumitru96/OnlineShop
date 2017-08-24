"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDataService {
    createDb() {
        const PRODUCTS = [
            { id: 0, title: 'phone' },
            { id: 2, title: 'laptop' },
            { id: 3, title: 'computer' },
            { id: 4, title: 'toy' },
            { id: 5, title: 'tablet' },
            { id: 6, title: 'shoes' },
        ];
        return { PRODUCTS };
    }
}
exports.InMemoryDataService = InMemoryDataService;

//# sourceMappingURL=in-memory-data.service.js.map
