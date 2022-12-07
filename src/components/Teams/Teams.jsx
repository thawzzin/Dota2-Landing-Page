import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Api } from "../../Api";
import "./Teams.scss";

const Teams = ({ setActive }) => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const api = () => {
    Api.get("/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setActive(false);
    api();
    Aos.init({ duration: 1000 });
    setTimeout(() => {
      Aos.refresh();
    }, 2000);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div className="team-background flex flex-col justify-center items-center min-h-screen p-20 ">
        <div data-aos="fade-up" className="team-title">
          <h1 className="text-center text-4xl font-bold uppercase">
            Pick a team to support
          </h1>
          <p className="text-center">
            A team that is too strong or too weak can be a huge problem for the
            player that is trying to win in dota. To help their team to do well,
            players should make sure that they are in the right dota team. Learn
            the best teams that are suitable for a specific type of.
          </p>
        </div>
        <div className="team-container flex flex-wrap justify-between md:gap-5 mt-5 select-none">
          {isLoading ? (
            <ClipLoader className="mx-auto" color="#ccc" />
          ) : (
            teams?.slice(0, 200).map((team) => (
              <div
                key={team.team_id}
                onClick={() => {
                  navigate("teamdetail", {
                    state: { team: team },
                  });
                }}
                className="image-container flex flex-col justify-center items-center w-40 mb-5 rounded-md overflow-hidden cursor-pointer hover:scale-150 transition-all duration-200"
              >
                {team.logo_url ? (
                  <img
                    className="w-full"
                    src={team?.logo_url}
                    alt={team.name}
                  />
                ) : (
                  <img
                    className="w-full"
                    src={require("../../assets/NoImage.png")}
                    alt="Team Logo"
                  />
                )}
                <h4 className="text-center mt-1 w-full"> {team.name} </h4>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Teams;
