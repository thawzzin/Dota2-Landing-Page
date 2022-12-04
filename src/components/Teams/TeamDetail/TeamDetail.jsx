import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Api } from "../../../Api";
import './teamDetail.scss'

const TeamDetail = () => {
  const { team } = useLocation().state;
  const [matches, setMatches] = useState([]);
  const [roster, setRoster] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = () => {
    const rosterFetch = Api.get(`/teams/${team.team_id}/players`);
    const matchFetch = Api.get(`/teams/${team.team_id}/matches`);
    const heroFetch = Api.get(`/teams/${team.team_id}/heroes`);
    axios.all([rosterFetch, matchFetch, heroFetch]).then(
      axios.spread((...responses) => {
        setRoster(responses[0].data);
        setMatches(responses[1].data);
        setHeroes(responses[2].data);
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    api();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="team-background min-h-screen">
      <div className="team-container flex flex-col justify-center items-center px-40 py-20 ">
        <div className="image-container w-40 mb-5 rounded-md overflow-hidden mt-20">
          {team.logo_url ? (
            <img
              className="w-full h-full"
              src={team.logo_url}
              alt="Team Logo"
            />
          ) : (
            <img
              className="w-full h-full"
              src={require("../../../assets/NoImage.png")}
              alt="Team Logo"
            />
          )}
        </div>
        <h1 className="text-xl font-bold"> {team.name} </h1>
        <div className="flex mt-10 gap-10 text-lg">
          {/* <h2>Team Rating : {Math.floor(team.rating)}</h2> */}
          <h2>
            <span className="text-green-400">Wins</span> : {team.wins}
          </h2>
          <h2>
            <span className="text-[#ff6046]">Losses</span> : {team.losses}
          </h2>
        </div>
        <div className="mt-10 w-full flex justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">Current Roster</h1>
            <ul className="pl-5">
              {isLoading ? (
                <ClipLoader className="mx-auto" color="#ccc" />
              ) : roster?.filter(
                  (player) => player.is_current_team_member === true
                ).length ? (
                roster
                  ?.filter((player) => player.is_current_team_member === true)
                  .map((player) => (
                    <div>
                      {
                        <li className="list-disc tracking-wider">
                          {player.name}
                        </li>
                      }
                    </div>
                  ))
              ) : (
                <div>
                  <li className="list-disc tracking-wider">No Active Player</li>
                </div>
              )}
            </ul>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">Most Played Heroes</h1>
            <ul className="pl-5">
              {isLoading ? (
                <ClipLoader className="mx-auto" color="#ccc" />
              ) : (
                heroes?.slice(0, 5).map((hero) => (
                  <div>
                    <li className="list-disc tracking-wider">
                      {" "}
                      {hero.localized_name}{" "}
                    </li>
                  </div>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="mt-10 w-full ">
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-5">Last Matches</h1>
          <div>
            {isLoading ? (
              <ClipLoader className="ml-5" color="#ccc" />
            ) : (
              matches?.slice(0, 5).map((match) => (
                <div className="matches-container bg-slate-800 mb-4 px-5 py-3 rounded-md flex justify-between items-center">
                  <div>
                    <p>
                      {team.name} &nbsp; VS &nbsp; {match.opposing_team_name}
                    </p>
                  </div>
                  <div className="league-container flex justify-between items-center w-1/2 gap-3">
                    {match.radiant_win === match.radiant ? (
                      <p className="text-green-400">Win</p>
                    ) : (
                      <p className="text-[#ff6046]">Lose</p>
                    )}
                    <p>{match.league_name}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
