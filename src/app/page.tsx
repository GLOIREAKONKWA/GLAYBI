"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Wallet, Users, Rocket } from "lucide-react";

export default function GlaybiApp() {
  const [balance, setBalance] = useState(0);

  const handleTap = () => {
    setBalance(balance + 1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white flex flex-col items-center p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          👑 GLAYBI COIN
        </motion.h1>
        <p className="text-sm mt-2 text-white/80">Tap pour gagner des GLAYBI !</p>
      </div>

      {/* Solde */}
      <Card>
        <CardContent>
          <p className="text-xl text-center font-bold text-indigo-900">
            Solde : {balance} GLAYBI
          </p>
        </CardContent>
      </Card>

      {/* Bouton Tap */}
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button onClick={handleTap} className="text-lg font-bold w-48 h-16">
          🚀 TAP
        </Button>
      </motion.div>

      {/* Navigation */}
      <div className="grid grid-cols-2 gap-4 pt-6">
        <NavIcon icon={<User />} label="Accueil" />
        <NavIcon icon={<Rocket />} label="Tâches" />
        <NavIcon icon={<Users />} label="Parrainage" />
        <NavIcon icon={<Wallet />} label="Portefeuille" />
      </div>
    </main>
  );
}

function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-white/90 hover:text-white transition duration-200">
      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
        {icon}
      </div>
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
}
