
export enum BookingStatus {
  Confirmed = 'Confirmed',
  Pending = 'Pending',
  Cancelled = 'Cancelled',
  CheckedIn = 'Checked In',
  CheckedOut = 'Checked Out',
}

export enum RoomStatus {
    Available = 'Available',
    Occupied = 'Occupied',
    Cleaning = 'Cleaning',
    OutOfOrder = 'Out of Order',
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export interface Booking {
  id: string;
  guest: Guest;
  roomNumber: number;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
  totalAmount: number;
}
