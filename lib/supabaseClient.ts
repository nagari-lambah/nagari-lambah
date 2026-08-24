import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://hlphkhptivkovobqysby.supabase.co";

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_Am68Hm3NtAJyNDI7-FGlBg_6C7Ayo3B";

export const supabase = createClient(supabaseUrl, supabaseKey);