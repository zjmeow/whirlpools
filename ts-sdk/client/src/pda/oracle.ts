import type { Address, ProgramDerivedAddress } from "@solana/web3.js";
import { getAddressEncoder, getProgramDerivedAddress } from "@solana/web3.js";
import { WHIRLPOOL_PROGRAM_ADDRESS } from "../generated/programs/whirlpool";

export async function getOracleAddress(
  whirlpool: Address,
): Promise<ProgramDerivedAddress> {
  return await getProgramDerivedAddress({
    programAddress: WHIRLPOOL_PROGRAM_ADDRESS,
    seeds: ["oracle", getAddressEncoder().encode(whirlpool)],
  });
}
