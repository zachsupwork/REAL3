import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient() {
    return createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!
    );
}
