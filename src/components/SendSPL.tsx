import { Button } from '@material-ui/core';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Keypair, SystemProgram, Transaction, TransactionSignature } from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { useNotify } from './notify';
import {Token, TOKEN_PROGRAM_ID} from "@solana/spl-token";

const DEMO_WALLET = new Uint8Array([91,99,28,187,142,115,17,61,24,57,149,83,194,59,71,98,178,33,250,250,236,91,232,27,204,244,18,197,163,106,130,171,246,233,181,67,226,134,166,158,178,189,91,213,228,27,52,92,199,24,76,62,111,195,38,126,64,238,83,248,57,149,233,255]);

const SendSPL: FC = (sendTo) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const notify = useNotify();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify('error', 'Wallet not connected!');
            return;
        }

        let fromWallet = Keypair.fromSecretKey(DEMO_WALLET);

        let signature: TransactionSignature = '';
        let mint = new PublicKey("9TGzU64oAUPMNNvmGVkDyTBgsFYxyWRmG24p8vQR1NGm");
        let toWallet = new PublicKey("Ekug9cZoV5QCzGVEUjvbsMyR5okgNkBWeZx1SU3KTVaM")
        let token = new Token(
            connection,
            mint,
            TOKEN_PROGRAM_ID,
            fromWallet
        );

        try {
            var fromTokenAccount = await token.getOrCreateAssociatedAccountInfo(publicKey);
            var toTokenAccount = await token.getOrCreateAssociatedAccountInfo(toWallet);
            const transaction = new Transaction().add(
                Token.createTransferInstruction(
                    TOKEN_PROGRAM_ID,
                    fromTokenAccount.address,
                    toTokenAccount.address,
                    publicKey,
                    [],
                    1
                  )
            );

            signature = await sendTransaction(transaction, connection);
            notify('info', 'Transaction sent:', signature);

            await connection.confirmTransaction(signature, 'processed');
            notify('success', 'Transaction successful!', signature);
        } catch (error: any) {
            notify('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [publicKey, notify, connection, sendTransaction]);

    return (
        <Button variant="contained" color="secondary" onClick={onClick} disabled={!publicKey}>
            Send Custom SPL token/NFT (devnet)
        </Button>
    );
};

export default SendSPL;