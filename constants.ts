import { Booking, BookingStatus, Guest, RoomStatus } from './types.ts';

export const GUESTS: Guest[] = [
  { id: 'guest-1', name: 'Alice Johnson', email: 'alice.j@example.com', phone: '555-0101', avatarUrl: 'https://picsum.photos/id/1011/100/100' },
  { id: 'guest-2', name: 'Bob Williams', email: 'bob.w@example.com', phone: '555-0102', avatarUrl: 'https://picsum.photos/id/1012/100/100' },
  { id: 'guest-3', name: 'Catherine Brown', email: 'cathy.b@example.com', phone: '555-0103', avatarUrl: 'https://picsum.photos/id/1027/100/100' },
  { id: 'guest-4', name: 'David Miller', email: 'david.m@example.com', phone: '555-0104', avatarUrl: 'https://picsum.photos/id/1005/100/100' },
  { id: 'guest-5', name: 'Eva Green', email: 'eva.g@example.com', phone: '555-0105', avatarUrl: 'https://picsum.photos/id/1025/100/100' },
];

export const BOOKINGS: Booking[] = [
  { id: 'bk-101', guest: GUESTS[0], roomNumber: 301, roomType: 'Deluxe Queen', checkIn: '2024-08-15', checkOut: '2024-08-18', status: BookingStatus.CheckedIn, totalAmount: 850.00 },
  { id: 'bk-102', guest: GUESTS[1], roomNumber: 405, roomType: 'Executive Suite', checkIn: '2024-08-16', checkOut: '2024-08-20', status: BookingStatus.Confirmed, totalAmount: 2200.50 },
  { id: 'bk-103', guest: GUESTS[2], roomNumber: 112, roomType: 'Standard King', checkIn: '2024-08-17', checkOut: '2024-08-19', status: BookingStatus.Pending, totalAmount: 450.75 },
  { id: 'bk-104', guest: GUESTS[3], roomNumber: 202, roomType: 'Deluxe Queen', checkIn: '2024-08-15', checkOut: '2024-08-17', status: BookingStatus.CheckedOut, totalAmount: 580.00 },
  { id: 'bk-105', guest: GUESTS[4], roomNumber: 510, roomType: 'Presidential Suite', checkIn: '2024-08-20', checkOut: '2024-08-25', status: BookingStatus.Confirmed, totalAmount: 5500.00 },
  { id: 'bk-106', guest: GUESTS[0], roomNumber: 303, roomType: 'Standard King', checkIn: '2024-08-22', checkOut: '2024-08-24', status: BookingStatus.Cancelled, totalAmount: 480.00 },
];

export const ROOMS = [
    { id: 'room-101', number: 101, type: 'Standard King', status: RoomStatus.Available },
    { id: 'room-102', number: 102, type: 'Standard King', status: RoomStatus.Available },
    { id: 'room-201', number: 201, type: 'Deluxe Queen', status: RoomStatus.Cleaning },
    { id: 'room-202', number: 202, type: 'Deluxe Queen', status: RoomStatus.Cleaning },
    { id: 'room-301', number: 301, type: 'Deluxe Queen', status: RoomStatus.Occupied },
    { id: 'room-302', number: 302, type: 'Deluxe Queen', status: RoomStatus.OutOfOrder },
    { id: 'room-401', number: 401, type: 'Executive Suite', status: RoomStatus.Available },
    { id: 'room-405', number: 405, type: 'Executive Suite', status: RoomStatus.Occupied },
    { id: 'room-510', number: 510, type: 'Presidential Suite', status: RoomStatus.Occupied },
];


export const OCCUPANCY_DATA = [
    { name: 'Mon', Occupancy: 65 },
    { name: 'Tue', Occupancy: 72 },
    { name: 'Wed', Occupancy: 78 },
    { name: 'Thu', Occupancy: 85 },
    { name: 'Fri', Occupancy: 92 },
    { name: 'Sat', Occupancy: 95 },
    { name: 'Sun', Occupancy: 88 },
];

export const REVENUE_DATA = [
    { name: 'Jan', Revenue: 22000 },
    { name: 'Feb', Revenue: 19000 },
    { name: 'Mar', Revenue: 28000 },
    { name: 'Apr', Revenue: 31000 },
    { name: 'May', Revenue: 42000 },
    { name: 'Jun', Revenue: 53000 },
];