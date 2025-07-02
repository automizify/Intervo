import { Button } from "@/components/ui/button";

export default function PaymentMethodCard(props) {
    return (
      <div className="border rounded-lg p-4 flex justify-between items-center">
        <div>
          <div className="font-bold">{props.title}</div>
          <div className="text-sm text-gray-500">
            Expires {props.expMonth}/{props.expYear}
          </div>
          <div className="text-xs text-gray-400 mt-1">{props.billingAddress}</div>
          {props.isDefault && (
            <span className="text-green-600 text-xs font-medium ml-2">Default</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {!props.isDefault && (
            <Button
              variant="outline"
              size="sm"
              onClick={props.onSetDefault}
            >
              Set as Default
            </Button>
          )}
          <Button
            variant="destructive"
            size="sm"
            onClick={props.onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
  