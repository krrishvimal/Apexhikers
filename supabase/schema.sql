-- Treks Table
CREATE TABLE treks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  price NUMERIC NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('Easy', 'Moderate', 'Hard', 'Technical')),
  duration TEXT NOT NULL,
  elevation TEXT,
  description TEXT,
  itinerary JSONB DEFAULT '[]'::jsonb,
  images TEXT[] DEFAULT '{}'::text[],
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bookings Table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  trek_id UUID REFERENCES treks(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  booking_date DATE NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic updated_at
CREATE TRIGGER update_treks_updated_at BEFORE UPDATE ON treks FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE treks ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for Treks (Public Read)
CREATE POLICY "Allow public read access to treks" ON treks FOR SELECT USING (true);

-- Policies for Bookings (Insert by anyone, Read/Update by Admin/Authenticated)
CREATE POLICY "Allow public insertion of bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated users to read bookings" ON bookings FOR SELECT USING (auth.role() = 'authenticated');
