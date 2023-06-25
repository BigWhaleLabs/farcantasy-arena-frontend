import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import ChildrenProp from 'models/ChildrenProp'

const { chains, publicClient } = configureChains([goerli], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'Farcantasy Arena',
  projectId: '41dd12b3eff2f1ea715af8e606bb36c5',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function ({ children }: ChildrenProp) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  )
}
