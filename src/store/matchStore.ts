// Match and discovery state
import { create } from 'zustand';
import { Match, InterestRequest } from '../types';

interface MatchState {
  matches: Match[];
  sentRequests: InterestRequest[];
  receivedRequests: InterestRequest[];
  addMatch: (match: Match) => void;
  sendInterest: (request: InterestRequest) => void;
  updateRequestStatus: (id: string, status: 'approved' | 'rejected') => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  matches: [],
  sentRequests: [],
  receivedRequests: [],

  addMatch: (match) =>
    set((state) => ({ matches: [...state.matches, match] })),

  sendInterest: (request) =>
    set((state) => ({ sentRequests: [...state.sentRequests, request] })),

  updateRequestStatus: (id, status) =>
    set((state) => ({
      receivedRequests: state.receivedRequests.map((req) =>
        req.id === id ? { ...req, status } : req
      ),
    })),
}));
