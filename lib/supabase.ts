import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.TECH_UP_next_JSSUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)