import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'services',
        icon: 'view_list',
        url: '/home/service-list'
    },
    {
        title: 'add resource',
        icon: 'add',
        url: '/home/resource-add'
    },
    {
        title:'add service',
        icon: 'add_task',
        url: '/home/service-add'
    }
];
