import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://hlphkhptivkovobqysby.supabase.co";

const supabaseKey =
  "sb_publishable_Am68Hm3NtAJyNDI7-FGlBg_6C7Ayo3B";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);