import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import group4 from "../assets/group4.png";

const OurClients = () => {
  const clients = [
    {
      name: "Lodha Group",
      image: group1,
    },
    {
      name: "Prestige Group",
      image: group2,
    },
    {
      name: "Brigade Group",
      image: group3,
    },
  ];
  return (
    <div className="w-[1400px] pt-20">
      <h6 className="text-3xl py-6 font-thin">Our Clients</h6>
      <div className="flex items-center justify-between">
        {clients.map((client) => (
          <img src={client.image} alt={client.name} className="w-[250px]" />
        ))}
        <img src={group4} alt="Sobha Group" className="w-[90px]" />
      </div>
    </div>
  );
};

export default OurClients;
