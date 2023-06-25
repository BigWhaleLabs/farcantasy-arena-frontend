import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function () {
  return (
    <div class="navbar bg-neutral text-neutral-content rounded-box drop-shadow-xl sticky top-4 z-10">
      <a class="btn btn-ghost normal-case text-xl flex-1 justify-start">
        Farcantasy Arena
      </a>
      <ConnectButton />
    </div>
  )
}
