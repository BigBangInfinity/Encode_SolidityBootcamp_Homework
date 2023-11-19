import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useContractRead, useNetwork, useSignMessage } from "wagmi";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/pages/index.tsx
            </code>
          </p>
          <PageBody></PageBody>
        </div>
      </div>
    </>
  );
};

function PageBody() {
  return (
    <>
      <p className="text-center text-lg">Here we are!</p>
      <WalletInfo></WalletInfo>
      <RandomWord></RandomWord>
    </>
  );
}



function WalletInfo() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork();
  if (address)
    return (
      <div>
        <p>Your account address is {address}</p>
        <p>Connected to the network {chain?.name}</p>
        <WalletAction></WalletAction>
        <WalletAction2></WalletAction2>
        <WalletBalance address={address as `0x${string}`}></WalletBalance>
        <TokenInfo address={address as `0x${string}`}></TokenInfo>
        <ApiData address={address as `0x${string}`}></ApiData>
        <BallotApiData address={address as `0x${string}`}></BallotApiData>
      </div>
    );
  if (isConnecting)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (isDisconnected)
    return (
      <div>
        <p>Wallet disconnected. Connect wallet to continue</p>
      </div>
    );
  return (
    <div>
      <p>Connect wallet to continue</p>
    </div>
  );
}

function WalletAction() {
  const [signatureMessage, setSignatureMessage] = useState("");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage();
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Testing signatures</h2>
        <div className="form-control w-full max-w-xs my-4">
          <label className="label">
            <span className="label-text">Enter the message to be signed:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={signatureMessage}
            onChange={e => setSignatureMessage(e.target.value)}
          />
        </div>
        <button
          className="btn btn-active btn-neutral"
          disabled={isLoading}
          onClick={() =>
            signMessage({
              message: signatureMessage,
            })
          }
        >
          Sign message
        </button>
        {isSuccess && <div>Signature: {data}</div>}
        {isError && <div>Error signing message</div>}
      </div>
    </div>
  );
}





function WalletAction2() {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage();
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Testing signatures</h2>
        <button
          className="btn btn-active btn-neutral"
          disabled={isLoading}
          onClick={() =>
            signMessage({
              message: "I want a token",
            })
          }
        >
          Sign message
        </button>
        {isSuccess && <div>Signature: {data}</div>}
        {isError && <div>Error signing message</div>}
      </div>
    </div>
  );
}


function WalletBalance(params: { address: `0x${string}` }) {
  const { data, isError, isLoading } = useBalance({
    address: params.address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Testing useBalance wagmi hook</h2>
        Balance: {data?.formatted} {data?.symbol}
      </div>
    </div>
  );
}

function TokenBalanceFromApi(params: { address: `0x${string}` }) {

  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/token-balance/${params.address}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading voting power from API...</p>;
  if (!data) return <p>No voting power information</p>;

    return (
      <div>
        Balance: {data.result}
      </div>
    );

}


function TokenInfo(params: { address: `0x${string}` }) {
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Wallet token balance from API:</h2>
        <TokenNameFromApi></TokenNameFromApi>
        <TokenBalanceFromApi address={params.address}></TokenBalanceFromApi>
      </div>
    </div>
  );
}

// function TokenName() {
//   const { data, isError, isLoading } = useContractRead({
//     address: "0x37dBD10E7994AAcF6132cac7d33bcA899bd2C660",
//     abi: [
//       {
//         constant: true,
//         inputs: [],
//         name: "name",
//         outputs: [
//           {
//             name: "",
//             type: "string",
//           },
//         ],
//         payable: false,
//         stateMutability: "view",
//         type: "function",
//       },
//     ],
//     functionName: "name",
//   });

//   const name = typeof data === "string" ? data : 0;

//   if (isLoading) return <div>Fetching name…</div>;
//   if (isError) return <div>Error fetching name</div>;
//   return <div>Token name: {name}</div>;
// }

// function TokenBalance(params: { address: `0x${string}` }) {
//   const { data, isError, isLoading } = useContractRead({
//     address: "0x37dBD10E7994AAcF6132cac7d33bcA899bd2C660",
//     abi: [
//       {
//         constant: true,
//         inputs: [
//           {
//             name: "_owner",
//             type: "address",
//           },
//         ],
//         name: "balanceOf",
//         outputs: [
//           {
//             name: "balance",
//             type: "uint256",
//           },
//         ],
//         payable: false,
//         stateMutability: "view",
//         type: "function",
//       },
//     ],
//     functionName: "balanceOf",
//     args: [params.address],
//   });

//   const balance = typeof data === "number" ? data : 0;

//   if (isLoading) return <div>Fetching balance…</div>;
//   if (isError) return <div>Error fetching balance</div>;
//   return <div>Balance: {balance}</div>;
// }

function TokenName() {
  const { data, isError, isLoading } = useContractRead({
    address: "0x37dBD10E7994AAcF6132cac7d33bcA899bd2C660",
    abi: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <div>Token name: {name}</div>;
}


function ApiData(params: { address: `0x${string}` }) {
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
      <h2 className="card-title">Token information from API:</h2>
        <TokenAddressFromApi></TokenAddressFromApi>
        <TotalSupplyFromApi></TotalSupplyFromApi>
        <TokenNameFromApi></TokenNameFromApi>
        <RequestTokens address={params.address}></RequestTokens>
        <DelegateVoteWithApi address={params.address}></DelegateVoteWithApi>
      </div>
    </div>
  );
}

function TokenAddressFromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/contract-address")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading token address from API...</p>;
  if (!data) return <p>No token address information</p>;

  return (
    <div>
      <p>Token address from API: {data.result}</p>
    </div>
  );
}

function RequestTokens(params: { address: string }) {
  const [data, setData] = useState<{ result: boolean }>();
  const [isLoading, setLoading] = useState(false);

  const body = { address: params.address, signature: "123" };

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
    return (
      <button
        className="btn btn-active btn-neutral"
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/mint-tokens", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
            });
        }}
      >
        Request tokens
      </button>
    );

  return (
    <div>
      <p>Result from API: {data.result ? data.result : 'failed'}</p>
    </div>
  );
}

function TotalSupplyFromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/total-supply")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading total supply from API...</p>;
  if (!data) return <p>No total supply information</p>;

  return (
    <div>
      Total supply from API: {data.result}
    </div>
  );
}



function TokenNameFromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/token-name")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading token name from API...</p>;
  if (!data) return <p>No total token name information</p>;

  return (
    <div>
      Token name from API: {data.result}
    </div>
  );
}

function BallotApiData(params: { address: `0x${string}` }) {
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
      <h2 className="card-title">Ballot information from API:</h2>
      <VotingPowerFromApi address={params.address}></VotingPowerFromApi>
      <BallotAddressFromApi></BallotAddressFromApi>
      <Proposal0FromApi></Proposal0FromApi>
      <Proposal1FromApi></Proposal1FromApi>
      <Proposal2FromApi></Proposal2FromApi>
        <WinningProposalFromApi></WinningProposalFromApi>
        <RequestTokens address={params.address}></RequestTokens>
        {/* <TotalSupplyFromApi></TotalSupplyFromApi>
        <TokenNameFromApi></TokenNameFromApi>
        <RequestTokens address={params.address}></RequestTokens> */}
      </div>
    </div>
  );
}


function BallotAddressFromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/ballot-address")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading ballot address from API...</p>;
  if (!data) return <p>No ballot address information</p>;

  return (
    <div>
      <p>Ballot address from API: {data.result}</p>
    </div>
  );
}

function VotingPowerFromApi(params: { address: `0x${string}` }) {

  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/voting-power/${params.address}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading voting power from API...</p>;
  if (!data) return <p>No voting power information</p>;

    return (
      <div>
        Voting power: {data.result}
      </div>
    );
}

function Proposal0FromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/proposal0")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading proposal0 info from API...</p>;
  if (!data) return <p>No proposal0 information</p>;

  return (
    <div>
      {data.result['name']}: {data.result['votes']} votes
    </div>
  );
}

function Proposal1FromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/proposal1")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading proposal1 info from API...</p>;
  if (!data) return <p>No proposal1 information</p>;

  return (
    <div>
      {data.result['name']}: {data.result['votes']} votes
    </div>
  );
}

function Proposal2FromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/proposal2")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading proposal2 info from API...</p>;
  if (!data) return <p>No proposal2 information</p>;

  return (
    <div>
      {data.result['name']}: {data.result['votes']} votes
    </div>
  );
}

function WinningProposalFromApi() {
  const [data, setData] = useState<{ result: string }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/winner-name")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading winner name from API...</p>;
  if (!data) return <p>No winner name information</p>;

  return (
    <div>
      Winner name from API: {data.result}
    </div>
  );
}

function DelegateVoteWithApi(params: { address: string }) {
  const [data, setData] = useState<{ result: boolean }>();
  const [isLoading, setLoading] = useState(false);

  const body = { address: params.address, signature: "123" };

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
    return (
      <button
        className="btn btn-active btn-neutral"
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/delegate-vote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
            });
        }}
      >
        Delegate vote
      </button>
    );

  return (
    <div>
      <p>Result from API: {data.result ? data.result : 'failed'}</p>
    </div>
  );
}


function RandomWord() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        setData(data.results[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Testing useState and useEffect from React library</h2>
        <h1>
          Name: {data.name.title} {data.name.first} {data.name.last}
        </h1>
        <p>Email: {data.email}</p>
      </div>
    </div>
  );
}

export default Home;
