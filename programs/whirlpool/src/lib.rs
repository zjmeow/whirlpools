use anchor_lang::prelude::*;

declare_id!("whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc");

#[doc(hidden)]
pub mod constants;
#[doc(hidden)]
pub mod errors;
#[doc(hidden)]
pub mod instructions;
#[doc(hidden)]
pub mod manager;
#[doc(hidden)]
pub mod math;
#[doc(hidden)]
pub mod security;
pub mod state;
#[doc(hidden)]
pub mod tests;
#[doc(hidden)]
pub mod util;

use instructions::*;
