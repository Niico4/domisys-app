const CashForm = () => {
  return (
    <div className="mt-3 p-3 rounded-lg" onClick={(e) => e.stopPropagation()}>
      <p className="text-gray-700">
        El pago en efectivo se realizará al momento de la entrega.
      </p>
    </div>
  );
};

export default CashForm;
