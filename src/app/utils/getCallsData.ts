import { createSupabaseClient } from "./supabaseClient";

export async function getCallsData() {
    try {
        const supabase = createSupabaseClient();

        // Fetch required columns from Supabase
        const { data, error } = await supabase
            .from("calls")
            .select("from_number, to_number, summary, appointment_booked");

        if (error) {
            console.error("Error fetching calls data:", error);
            return [];
        }

        return data || [];
    } catch (err) {
        console.error("Unexpected error fetching call data:", err);
        return [];
    }
}
