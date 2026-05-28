import { LocalEvent } from '@/types';

function getDateBadge(event: LocalEvent) {
    if (event.day && event.month) {
        return `${event.day} ${event.month}`;
    }
    if (event.id === 'e1') return 'PRÓXIMO SÁBADO';
    if (event.id === 'e4') return 'ESTE DOMINGO';
    return 'EN 2 SEMANAS';
}

export { getDateBadge }

