"use client";
import Marketplace from "@/components/Marketplace";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useWallet } from "@/context/WalletContext";
import Link from "next/link";

const MarketplacePage = () => {
  const { provider } = useWallet();

  return (
    <div className="min-h-screen ">
      <div className="px-20 py-12">
        <div>
          <div className="px-4 md:px-8 flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Marketplace
              </h1>
              <p className="text-gray-300 pb-4 mt-2 text-base md:text-lg">
                Discover and rent premium advertising spaces.
              </p>
            </div>
            <div className="mb-2 md:mb-0 md:mr-1 flex-shrink-0">
              {!provider ? (
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-center max-w-2xl">
                  <p className="text-red-300">
                    If not connected !!! Please connect your wallet to view ad
                    spaces
                  </p>
                </div>
              ) : (
                <Link href="/createAdspace">
                  <InteractiveHoverButton className="rounded-xl w-full md:w-auto">
                    Create New AD
                  </InteractiveHoverButton>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Marketplace provider={provider} />
      </div>
    </div>
  );
};

export default MarketplacePage;
