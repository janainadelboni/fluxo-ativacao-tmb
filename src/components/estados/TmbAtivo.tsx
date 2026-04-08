interface Props {
  showCheckout: boolean
  onToggleCheckout: () => void
  onDesativar: () => void
}

export function TmbAtivo({ showCheckout }: Props) {
  return (
    <div className="estado-panel">
      {showCheckout ? (
        <div className="alert alert-success">
          Boleto parcelado ativo neste produto. A opcao TMB ja esta disponivel no checkout para os compradores.
        </div>
      ) : (
        <div className="alert alert-warning">
          Boleto parcelado desativado no checkout. O comprador nao vera a opcao TMB como forma de pagamento. Ative o switch acima para disponibilizar.
        </div>
      )}
    </div>
  )
}
