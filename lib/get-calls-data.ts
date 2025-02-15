import { createClient } from "@supabase/supabase-js";

function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
  }
  return days;
}

export async function getCallsData() {
  // Simulated data for demonstration
  const totalCalls = 245;
  const appointmentsBooked = 78;
  const averageCallDuration = 8.5; // minutes
  const averageRating = 4.2;

  const last7Days = getLast7Days();
  const weeklyCallVolume = last7Days.map(date => ({
    date,
    calls: Math.floor(Math.random() * 40) + 10
  }));

  const recentCalls = Array.from({ length: 5 }, (_, i) => ({
    id: `call-${i + 1}`,
    from_number: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    duration: Math.floor(Math.random() * 900) + 300,
    call_type: ["Appointment", "Inquiry", "Follow-up"][Math.floor(Math.random() * 3)],
    appointment_booked: Math.random() > 0.5,
    rating: Math.floor(Math.random() * 3) + 3,
    start_time: new Date(Date.now() - Math.floor(Math.random() * 86400000))
  }));

  return {
    totalCalls,
    appointmentsBooked,
    averageCallDuration,
    averageRating,
    weeklyCallVolume,
    recentCalls,
  };
}