
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface Event {
  name: string;
  date: string;
  venue: string;
  registrations: number;
  status: string;
}

interface AddEventDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: Event) => void;
}

const AddEventDialog = ({ isOpen, onClose, onAddEvent }: AddEventDialogProps) => {
  const [formData, setFormData] = useState<Event>({
    name: '',
    date: '',
    venue: '',
    registrations: 0,
    status: 'Upcoming',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'registrations' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent(formData);
    setFormData({
      name: '',
      date: '',
      venue: '',
      registrations: 0,
      status: 'Upcoming',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-festblue-light text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add New Event</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Event Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-festblue border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
            />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
              Event Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-festblue border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
            />
          </div>
          
          <div>
            <label htmlFor="venue" className="block text-sm font-medium text-gray-300 mb-1">
              Venue
            </label>
            <input
              id="venue"
              name="venue"
              type="text"
              required
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-festblue border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
            />
          </div>
          
          <div>
            <label htmlFor="registrations" className="block text-sm font-medium text-gray-300 mb-1">
              Initial Registrations
            </label>
            <input
              id="registrations"
              name="registrations"
              type="number"
              min="0"
              value={formData.registrations}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-festblue border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
            />
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-festblue border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-festblue-accent hover:bg-festblue-accent/80">
              Add Event
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventDialog;
