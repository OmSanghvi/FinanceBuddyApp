"use client"

import { useDeleteConnectedBank } from "@/features/plaid/api/use-delete-connected-bank";
import { Button } from "@/components/ui/button";
import { useConfirm } from "@/hooks/use-confirm";

export const PlaidDisconnect = () => {
    const [ConfirmationDialog, confirm] = useConfirm(
        "Are you sure?",
        "This will disconnect your bank account and remove all associated data."
    );

    const deleteConnectedBank = useDeleteConnectedBank();

    const onClick = async () => {
        const ok = await confirm();

        if (ok) {
            deleteConnectedBank.mutate();
        }
    };

    return (
        <>
            <ConfirmationDialog />
            <Button
                onClick={onClick}
                disabled={deleteConnectedBank.isPending}
                size="sm"
                variant="ghost"
            >
                Disconnect
            </Button>
        </>
    )
}