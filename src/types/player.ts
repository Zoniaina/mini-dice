import { z } from 'zod';

export const PlayerSchema = z.object({
  id: z.number(),
  name: z.string(),
  score: z.number(),
  dice: z.array(z.number()),
  winner: z.boolean().default(false),
});

export type Player = z.infer<typeof PlayerSchema>;

const PLayerInputSchema = PlayerSchema.pick({ name: true });

export type PlayerInput = z.infer<typeof PLayerInputSchema>;

export const GameContextSchema = z.object({
  players: z.array(PlayerSchema),
  addPlayer: z.function().args(z.string()).returns(z.void()),
  rollDice: z.function().args(z.number()).returns(z.void()),
  currentTurn: z.number(),
  nextTurn: z.function().returns(z.void()),
  reinitScores: z.function().returns(z.void()),
  initGame: z.function().returns(z.void()),
  dice1: z.number().default(1),
  dice2: z.number().default(1),
  winner: PlayerSchema.nullable(),
  findWinner: z.function().returns(z.void()),
});

export type GameContextType = z.infer<typeof GameContextSchema>;
